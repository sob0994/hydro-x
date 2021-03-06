import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  Header,
  Image,
  Segment,
  Statistic,
  Table,
  Transition,
} from "semantic-ui-react";
import dateformat from "dateformat";
import img1 from "../../assets/img.svg";
import img2 from "../../assets/logo.png";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [jam, setJam] = useState(dateformat(Date.now(), "HH:MM:ss"));
  const [load, setLoad] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [foot, setFoot] = useState(true);
  const last = data.length - 1;

  // document.title = "Smart Hydroponic";

  const handleOpen = () => {
    if (!show) {
      setShow(true);
      setTimeout(() => {
        setIsOpen(true);
      }, 100);
    } else {
      setIsOpen(false);
      setFoot(true);

      setTimeout(() => {
        setShow(false);
        setFoot(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const getData = () => {
      axios.get("https://boyler-app.herokuapp.com/api/sensors").then((data) => {
        setData(data.data.data);
      });
    };
    const interval = setInterval(() => {
      axios.get("https://boyler-app.herokuapp.com/api/sensors").then((data) => {
        setData(data.data.data);
      });
    }, 4000);
    getData();
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
      setFoot(false);
    }, 500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setJam(dateformat(Date.now(), "HH:MM:ss"));
    }, 1000);
  });

  return (
    <Grid padded stackable>
      <Grid.Row columns="2">
        <Grid.Column style={{ display: "flex", alignItems: "center" }}>
          <Transition visible={!load} animation="drop" duration={1000}>
            <Image
              src={img2}
              height="100px"
              width="100px"
              style={{ padding: "1rem" }}
            />
          </Transition>
          <Transition visible={!load} animation="drop" duration={1000}>
            <Header style={{ margin: 0 }}>
              <Header.Content>
                SISTEM KONTROL OTOMATIS KEPEKATAN AIR NUTRISI HIDROPONIK
                BERBASIS INTERNET OF THINGS (IOT)
                <Header.Subheader style={{ color: "rgb(199 199 199)" }}>
                  I WAYAN SUSTRISNA PUTRA (1715344007)
                </Header.Subheader>
                <Header.Subheader style={{ color: "rgb(199 199 199)" }}>
                  PROGRAM STUDI D4 TEKNIK OTOMASI
                </Header.Subheader>
                <Header.Subheader style={{ color: "rgb(199 199 199)" }}>
                  JURUSAN TEKNIK ELEKTRO
                </Header.Subheader>
              </Header.Content>
            </Header>
          </Transition>
        </Grid.Column>
        <Grid.Column style={{ display: "flex", alignItems: "center" }}>
          <Transition visible={!load} animation="drop" duration={1000}>
            <Header style={{ margin: "auto" }} as="h1" textAlign="center">
              <Header.Content>
                SMART HYDROPONIC
                <Header.Subheader style={{ color: "rgb(199 199 199)" }}>
                  Desa Sanding, Tampaksiring, Gianyar - Bali
                </Header.Subheader>
              </Header.Content>
            </Header>
          </Transition>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns="4">
        <Transition visible={!load} animation="slide down" duration={1200}>
          <Grid.Column>
            <Segment
              textAlign="center"
              color="blue"
              style={{ overflow: "hidden" }}
            >
              <Statistic color="blue">
                <Statistic.Value>
                  <span
                    style={{
                      fontSize: "3.5rem",
                    }}
                  >
                    {jam}
                  </span>
                </Statistic.Value>
                <Statistic.Label>Today</Statistic.Label>
              </Statistic>
            </Segment>
          </Grid.Column>
        </Transition>
        <Transition visible={!load} animation="slide down" duration={1200}>
          <Grid.Column>
            <Segment textAlign="center" color="violet">
              <Statistic color="violet">
                <Statistic.Value>
                  <span
                    style={{
                      fontSize: "3rem",
                    }}
                  >
                    {data[last]?.tds || 0.0} PPM
                  </span>
                </Statistic.Value>
                <Statistic.Label>TDS</Statistic.Label>
              </Statistic>
            </Segment>
          </Grid.Column>
        </Transition>
        <Transition visible={!load} animation="slide down" duration={1200}>
          <Grid.Column>
            <Segment textAlign="center" color="purple">
              <Statistic color="purple">
                <Statistic.Value>
                  <span
                    style={{
                      fontSize: "3rem",
                    }}
                  >
                    {data[last]?.flow1 || 0.0} ML
                  </span>
                </Statistic.Value>
                <Statistic.Label>NUTRISI A</Statistic.Label>
              </Statistic>
            </Segment>
          </Grid.Column>
        </Transition>
        <Transition visible={!load} animation="slide down" duration={1200}>
          <Grid.Column>
            <Segment textAlign="center" color="teal">
              <Statistic color="teal">
                <Statistic.Value>
                  <span
                    style={{
                      fontSize: "3rem",
                    }}
                  >
                    {data[last]?.flow2 || 0.0} ML
                  </span>
                </Statistic.Value>
                <Statistic.Label>NUTRISI B</Statistic.Label>
              </Statistic>
            </Segment>
          </Grid.Column>
        </Transition>
      </Grid.Row>
      <Transition visible={!load} animation="slide down" duration={1200}>
        <Grid.Row centered columns="1">
          {/* <div> */}
          <Button
            color="violet"
            onClick={handleOpen}
            style={{ marginBottom: "1rem" }}
          >
            {isOpen ? "Hide History Data" : "Show History Data"}
          </Button>

          {/* </div> */}
          {show && (
            <Transition visible={isOpen} animation="slide down" duration={600}>
              <Grid.Column>
                <Segment
                  textAlign="center"
                  color="orange"
                  style={{
                    overflow: "auto",
                    maxHeight: "300px",
                  }}
                >
                  <Table size="small" celled unstackable striped>
                    <Table.Header>
                      <Table.Row textAlign="center">
                        <Table.HeaderCell>Day</Table.HeaderCell>
                        <Table.HeaderCell>TDS (PPM)</Table.HeaderCell>
                        <Table.HeaderCell>Nutrisi A (ML)</Table.HeaderCell>
                        <Table.HeaderCell>Nutrisi B (ML)</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {data
                        .slice(0)
                        .reverse()
                        .map((data, idx) => {
                          return (
                            <Table.Row key={idx} textAlign="center">
                              <Table.Cell>
                                {dateformat(data.waktu, "dd-mm-yyyy HH:MM:ss")}
                              </Table.Cell>
                              <Table.Cell>{data.tds}</Table.Cell>
                              <Table.Cell>{data.flow1}</Table.Cell>
                              <Table.Cell>{data.flow2}</Table.Cell>
                            </Table.Row>
                          );
                        })}
                    </Table.Body>
                  </Table>
                </Segment>
              </Grid.Column>
            </Transition>
          )}
        </Grid.Row>
      </Transition>

      <Transition visible={!foot} animation="slide down" duration={1000}>
        <Grid.Row columns="1">
          <Grid.Column>
            <Header as="h1" textAlign="center" color="grey">
              <Header.Content>
                <Header.Subheader
                  style={{ fontSize: "0.9rem", color: "rgb(199 199 199)" }}
                >
                  <b style={{ color: "rgb(40 40 40)" }}>Dibiayai Oleh :</b>
                  <br />
                  Penelitian Unggulan Strategis P3M PNB
                  <br />
                  Dr. Anak Agung Ngurah Gde Sapteka, CIRR.
                  <div
                    style={{
                      cursor: "pointer",
                      marginTop: "1rem",
                      color: "lightgreen",
                    }}
                  >
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://drive.google.com/file/d/1yfnla4bsEh7k_UUvpmX6hrQFdPKPu314/view?usp=sharing"
                    >
                      Download Android Apk
                    </a>
                  </div>
                </Header.Subheader>
              </Header.Content>
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Transition>

      <Transition visible={!load} animation="slide down" duration={1500}>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            bottom: 0,
            left: 0,
            background: `url(${img1})`,
            backgroundPosition: "left bottom",
            backgroundRepeat: "no-repeat",
            backgroundSize: "40vh 40vh",
            zIndex: -1,
          }}
        ></div>
      </Transition>
    </Grid>
  );
};

export default Dashboard;
