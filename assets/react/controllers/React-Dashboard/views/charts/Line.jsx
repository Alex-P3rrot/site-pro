import React from 'react';
import Header from "../../components/Header";
import {Box} from "@mui/material";
import {LineComponent} from "../../components/charts/LineComponent";
import {LineData} from "../../mock/LineData";

export function Line() {

    return (
        <Box padding={2} height="80vh" width="80vw">
            <Header title="Line chart" subtitle="Simple responsive line chart"/>
            <LineComponent data={LineData}/>
        </Box>
    )
}