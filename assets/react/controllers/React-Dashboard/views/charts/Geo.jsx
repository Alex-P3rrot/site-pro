import React from 'react';
import Header from "../../components/Header";
import {Box} from "@mui/material";
import {GeoComponent} from "../../components/charts/GeoComponent";
import {GeoData} from "../../mock/GeoData";

export function Geo() {

    return (
        <Box padding={2} height="80vh" width="80vw">
            <Header title="Geo chart" subtitle="Simple responsive geo chart"/>
            <GeoComponent data={GeoData} scale={170} translation={[.5, .7]} legend={[
                {
                    anchor: 'bottom-left',
                    direction: 'column',
                    translateX: 20,
                    translateY: -100,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: 'left-to-right',
                    itemTextColor: '#fff',
                    itemOpacity: 0.85,
                    symbolSize: 18,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000000',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}/>
        </Box>
    )
}