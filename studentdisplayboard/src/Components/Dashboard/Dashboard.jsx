import React, { useEffect, useCallback } from "react";
import { Card } from "../Card/Card";
import Grid from "@mui/material/Grid";
import { Loader } from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { loadingData } from "../../redux/actions/fetchDataAction";

const Dashboard = () => {
  const { data: item, isLoading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const loadData = useCallback(() => {
    dispatch(loadingData());
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (!isLoading) {
    return <Loader />;
  }

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {!error
        ? item.map((element) => {
            return (
              <Grid item xs={2} sm={4} md={4} key={element.id}>
                <Card item={element} />
              </Grid>
            );
          })
        : error}
    </Grid>
  );
};

export default Dashboard;
