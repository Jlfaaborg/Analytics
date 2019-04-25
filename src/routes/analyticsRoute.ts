import express from "express";
import { api } from "../gapi";
const analyticsRouter = express.Router();

analyticsRouter.all("/", (req: any, res: any) => {
  // tslint:disable-next-line: no-shadowed-variable
  api.management.accounts.list().then((anotherRes: any) => {
    res.render("selectAccounts", {
      data: mapToForm(anotherRes.data.items),
      email: req.body.email,
      select: selectAll
    });
  });
});

analyticsRouter.all("/do", (req: any, res: any) => {
  if (req.body.method === "add") {
    res.render("add", {
      err: addUser(req.body)
    });
  } else if (req.body.method === "delete") {
    res.render("delete", {
      err: deleteUser(req.body)
    });
  }
});

const selectAll = () => {
  const boxes = document.getElementsByClassName("boxes") as HTMLCollectionOf<
    HTMLInputElement
  >;
  for (const box of boxes) {
    box.checked = true;
  }
};

function sleep(ms: number) {
  return new Promise((resolve: any) => {
    setTimeout(resolve, ms);
  });
}

function mapToForm(data: []) {
  const formData = data.map((item: any) => {
    const check = `<input type="checkbox" class="boxes" name="${
      item.name
    }" value="${item.id}">${item.name}<br>`;
    return check;
  });
  return formData;
}

function addUser(body: any) {
  const email = body.email;
  const accounts = [];

  delete body.email;
  delete body.method;
  for (const name in body) {
    if (name) {
      const item = { name, value: body[name] };
      accounts.push(item);
    }
  }

  accounts.forEach(async (account: any) => {
    await sleep(1000);
    if (account) {
      await api.management.accountUserLinks
        .insert({
          accountId: account.value,
          requestBody: {
            permissions: {
              effective: ["MANAGE_USERS", "EDIT"],
              local: ["MANAGE_USERS", "EDIT"]
            },
            userRef: { email }
          }
        })
        .then((res: any) => {
          // tslint:disable-next-line: no-console
          console.log(
            "Added User " +
              `${email} ` +
              "To " +
              `${res.data.entity.accountRef.name} ` +
              "Method " +
              `${res.config.method} ` +
              "Code " +
              `${res.status} `
          );
          return "Good";
        })
        .catch((err: any) => {
          // tslint:disable-next-line: no-console
          console.error(err);
          return err;
        });
      return "Good";
    }
    // tslint:disable-next-line: no-console
    console.log("done");
    return "No Account";
  });
}

function deleteUser(body: any) {
  async function getLinkId(accountId: any, accountEmail: any): Promise<object> {
    let userLink = "false";
    let name: any;
    await api.management.accountUserLinks
      .list({
        accountId
      })
      .then((res: any) => {
        for (const linker of res.data.items) {
          if (linker.userRef.email === accountEmail) {
            userLink = linker.id;
            name = linker.userRef.email;
          }
        }
      })
      .catch((err: any) => {
        // tslint:disable-next-line: no-console
        console.error(err);
      });
    return new Promise((resolve: any) => {
      resolve({ userLink, name });
    });
  }
  const email = body.email;
  const accounts = [];

  delete body.email;
  delete body.method;
  for (const name in body) {
    if (name) {
      const item = { name, value: body[name] };
      accounts.push(item);
    }
  }

  accounts.forEach(async (account: any) => {
    await sleep(1000);
    if (account) {
      let linkId = "false";
      let name = "";
      await getLinkId(account.value, email).then((item: any) => {
        linkId = item.userLink;
        name = item.name;
      });
      if (linkId === "false") {
        return;
      }
      await api.management.accountUserLinks
        .delete({
          accountId: account.value,
          linkId
        })
        .then((res: any) => {
          // tslint:disable-next-line: no-console
          console.log(
            "Deleted User " +
              `${email} ` +
              "From " +
              `${name} ` +
              "Method " +
              `${res.config.method} ` +
              "Code " +
              `${res.status} `
          );
        })
        .catch((err: any) => {
          // tslint:disable-next-line: no-console
          console.error(err);
          return err;
        });
      return "Good";
    }
    return "No Account";
  });
  // tslint:disable-next-line: no-console
  console.log("done");
}
export { analyticsRouter };
