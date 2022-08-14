import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "../styles/Map.module.css";
import Navbar from "./Navbar";

import {
  YMaps,
  Map,
  Placemark,
  ZoomControl,
  GeolocationControl,
  ListBox,
  ListBoxItem,
  RouteButton,
  RouteEditor,
  RoutePanel,
  RulerControl,
  TrafficControl,
  TypeSelector,
  Panorama,
} from "@pbe/react-yandex-maps";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
const key = "5a366661-4a98-4523-b0cf-8c1297e63194";

export default function Home() {
  const dispatch = useDispatch();

  const [route, setRoute] = useState(null);
  const [to, setTo] = useState("")
  const [from, setFrom] = useState("")

  useEffect(() => {
      {route&&setTo(route.to)}
      {route&&setFrom(route.from)}
    })
    console.log(route)

  // const from = route.from
  // const to = route.to

  const routes = useRef(null);
  const order = { from: "Grozny", to: "Argun" };
  console.log(1234);

  return (
    <div className={styles.map}>
      <Head>
        <Script
          src="https://api-maps.yandex.ru/2.1/?apikey=5a366661-4a98-4523-b0cf-8c1297e63194&lang=ru_RU"
          type="text/javascript"
        ></Script>
      </Head>

      {route ? (
        <div>
          <h1>{route.to}</h1>
          <h1>{route.from}</h1>
        </div>
      ) : null}

      <YMaps query={{ apikey: key }}>
        <Map
          state={{
            center: [55.751574, 37.573856],
            zoom: 9,
          }}
          width="100%"
          height="700px"
          modules={["multiRouter.MultiRoute"]}
          // onLoad={(ymaps) => setYmaps(ymaps)}
        >
          <RouteButton
            options={{
              float: "right",
            }}
          />
          <RouteEditor />
          <RulerControl />
          <TrafficControl />
          <TypeSelector />

          <RoutePanel
            options={{
              float: "left",
              showHeader: true,
              title: "Вызов такси",
              routePanelTypes: { taxi: true },
              maxWidth: 600
            }}
            onGeometryChange={(e) =>
              console.log(
                "route panel",
                e.get("target".geometry.getCoordinates())
              )
            }
            instanceRef={(ref) =>
              ref && setRoute(ref.routePanel.state.getAll())
            }
          />
        </Map>
      </YMaps>
      <input type="text" placeholder="arvan" />
    </div>
  );
}
