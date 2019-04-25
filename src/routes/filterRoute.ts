import express from "express";
import { filters } from "../filter";
import { api } from "../gapi";

// tslint:disable-next-line: interface-name
interface Filter {
  name: string;
  type: string;
  field: string;
  matchType: string;
  expressionValue: string;
}

const filterRouter = express.Router();

function sleep(ms: number) {
  return new Promise((resolve: any) => {
    setTimeout(resolve, ms);
  });
}

filterRouter.all("/", async (req: any, res: any) => {
  const params = createParams(
    req.body.accountId,
    req.body.propertyId,
    req.body.viewId
  );
  if (req.body.method === "add") {
    res.render("add", {
      err: addFilters(params)
    });
  } else if (req.body.method === "delete") {
    res.render("delete", {
      err: deleteFilter(params[0].accountId)
    });
  }
});

function createParams(id: string, property: string, view: string) {
  const params = [];
  for (const filter of filters) {
    const details =
      filter.type === "EXCLUDE" ? "excludeDetails" : "includeDetails";
    const param = {
      accountId: id,
      propertyId: property,
      resource: {
        name: filter.name,
        type: filter.type,
        [details]: {
          expressionValue: filter.expressionValue,
          field: filter.field,
          matchType: filter.type
        }
      },
      viewId: view
    };
    params.push(param);
  }
  return params;
}

async function addFilters(params: any) {
  for (const param of params) {
    await sleep(500);
    // tslint:disable-next-line: no-shadowed-variable
    await api.management.filters
      .insert({
        accountId: param.accountId,
        requestBody: param.resource
      })
      .then((anotherRes: any) => {
        return linkFilters(param, anotherRes.data);
      })
      .catch((err: any) => {
        // tslint:disable-next-line: no-console
        console.error(err);
        return err;
      });
  }
  // tslint:disable-next-line: no-console
  console.log("done");
}

async function linkFilters(data: any, response: any) {
  await sleep(500);
  await api.management.profileFilterLinks
    .insert({
      accountId: data.accountId,
      profileId: data.viewId,
      requestBody: {
        filterRef: response
      },
      webPropertyId: data.propertyId
    })
    .then((res: any) => {
      // tslint:disable-next-line: no-console
      console.log(
        `Added Filter ${res.data.filterRef.name} To ${
          res.data.profileRef.name
        } Method: ${res.config.method} Code: ${res.status}`
      );
    })
    .catch((err: any) => {
      // tslint:disable-next-line: no-console
      console.error(err);
      return err;
    });
}

function deleteFilter(id: string) {
  api.management.filters.list({ accountId: id }).then(async (res: any) => {
    const filterz = res.data.items;
    for (const filter of filterz) {
      await sleep(1000);
      api.management.filters
        .delete({ accountId: id, filterId: filter.id })
        .then((anotherRes: any) => {
          // tslint:disable-next-line: no-console
          console.log(
            `Deleted Filter ${filter.name} Method: ${
              anotherRes.config.method
            } Code: ${anotherRes.status}`
          );
        })
        .catch((err: any) => {
          // tslint:disable-next-line: no-console
          console.error(err);
          return err;
        });
    }
    // tslint:disable-next-line: no-console
    console.log("done");
  });
}
export { filterRouter };
