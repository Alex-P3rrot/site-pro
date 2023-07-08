import React from 'react';
import Header from "../../components/Header";
import {Box} from "@mui/material";
import {BarComponent} from "../../components/charts/BarComponent";
import {BarData} from "../../mock/BarData";

export function Bar() {

    return (
        <Box padding={2} height="80vh" width="80vw">
            <Header title="Bar chart" subtitle="Simple responsive bar chart"/>
            <BarComponent data={BarData} margin={{top: 50, right: 130, bottom: 50, left: 60}} padding={0.3} legend={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    itemTextColor: '#fff',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}/>
        </Box>
    )
}