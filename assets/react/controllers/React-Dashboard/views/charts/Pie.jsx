import React from 'react';
import {Box} from "@mui/material";
import Header from "../../components/Header";
import {PieComponent} from "../../components/charts/PieComponent";
import {PieData} from "../../mock/PieData";

export function Pie() {
    return (
        <Box padding={2} height="80vh" width="80vw">
            <Header title="Pie chart" subtitle="Simple responsive pie chart"/>
            <PieComponent data={PieData}
                          legend={[
                              {
                                  anchor: 'bottom',
                                  direction: 'row',
                                  translateY: 56,
                                  itemWidth: 100,
                                  itemHeight: 18,
                                  itemTextColor: '#fff',
                                  symbolSize: 20,
                                  symbolShape: 'circle',
                                  effects: [
                                      {
                                          on: 'hover',
                                          style: {
                                              itemOpacity: '.7'
                                          }
                                      }
                                  ]
                              }
                          ]}
                          margin={{top: 100, right: 100, bottom: 100, left: 100}}/>
        </Box>
    )
}