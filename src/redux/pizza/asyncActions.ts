import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { identity, pickBy } from "lodash";
import { Pizza, SearchPizzaParams } from "./types";

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    console.log(params, 4444);
    const { data } = await axios.get<Pizza[]>(
      `https://660a921bccda4cbc75db3a6a.mockapi.io/items`,
      {
        params: pickBy(
          {
            page: currentPage,
            limit: 4,
            category,
            sortBy,
            order,
            search,
          },
          identity
        ),
      }
    );

    return data;
  }
);
