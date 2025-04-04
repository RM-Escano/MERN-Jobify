import React from "react";
import customFetch from "../util/customFetch";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
export const action =
  (queryClient) =>
  async ({ params }) => {
    try {
      await customFetch.delete(`jobs/${params.id}`);
      queryClient.invalidateQueries(["jobs"]);
      toast.success("Job Deleted Successfully");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
    return redirect("/dashboard/all-jobs");
  };
