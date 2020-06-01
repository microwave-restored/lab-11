import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { LAUNCH_TILE_DATA } from "./launches";
import { Loading, Header, LaunchDetail } from "../components";
import { ActionButton } from "../containers";
import { RouteComponentProps } from "@reach/router";
import * as LaunchDetailsTypes from "./__generated__/LaunchDetails";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/checkoutForm";


export const GET_LAUNCH_DETAILS = gql`
  query LaunchDetails($launchId: ID!) {
    launch(id: $launchId) {
      site
      rocket {
        type
      }
      ...LaunchTile
    }
  }
  ${LAUNCH_TILE_DATA}
`;

interface LaunchProps extends RouteComponentProps {
  launchId?: any;
}

const stripePromise = loadStripe("pk_test_ZG86HuPURJ7YFE9WiDGIpnqx001M9Spb7a");



const Launch: React.FC<LaunchProps> = ({ launchId }) => {
  const { data, loading, error } = useQuery<
    LaunchDetailsTypes.LaunchDetails,
    LaunchDetailsTypes.LaunchDetailsVariables
  >(GET_LAUNCH_DETAILS, { variables: { launchId } });


  if (loading) return <Loading />;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;

  return (
    <Fragment>
      <Header
        image={
          data.launch && data.launch.mission && data.launch.mission.missionPatch
        }
      >
        {data && data.launch && data.launch.mission && data.launch.mission.name}
      </Header>
      
      <LaunchDetail {...data.launch} />
 <Elements stripe={stripePromise}> 
<CheckoutForm/>
</Elements>
      <ActionButton {...data.launch} />
    </Fragment>
  );
};

export default Launch;
