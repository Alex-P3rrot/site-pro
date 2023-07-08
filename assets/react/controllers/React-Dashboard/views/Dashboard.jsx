import React from 'react'
import {Box} from "@mui/material";
import {PieComponent} from "../components/charts/PieComponent";
import {PieData} from "../mock/PieData";
import {LineComponent} from "../components/charts/LineComponent";
import {LineData} from "../mock/LineData";
import {GeoComponent} from "../components/charts/GeoComponent";
import {GeoData} from "../mock/GeoData";
import {BarComponent} from "../components/charts/BarComponent";
import {BarData} from "../mock/BarData";

export function Dashboard() {
    return (
        <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={5} gridTemplateRows="repeat(4, 1fr)" padding={2}>
            <Box gridRow="1/3" gridColumn="1/2" height={350}>
                <PieComponent data={PieData}
                              legend={[
                                  {
                                      anchor: 'left',
                                      direction: 'column',
                                      translateX: -100,
                                      itemHeight: 35,
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
                              margin={{top: 100, right: 20, bottom: 100, left: 100}}/>
            </Box>
            <Box gridRow="1/3" gridColumn="2/5" height={350}>
                <LineComponent data={LineData}/>
            </Box>
            <Box gridRow="3/5" gridColumn="1/4" height={380}>
                <GeoComponent data={GeoData} scale={90} translation={[.35, .7]}/>
            </Box>
            <Box gridRow="3/5" gridColumn="3/5" height={380}>
                <BarComponent data={BarData} margin={{left: 100, bottom: 30}} padding={.5} legend={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom',
                        direction: 'row',
                        translateY: 30,
                        translateX: 25,
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
        </Box>
    )
}