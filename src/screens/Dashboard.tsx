import React, { memo } from "react";
import Calculator from "../components/Calculator";
import Button from "../components/Button";
import { Navigation } from "../types";
import { logoutUser } from "../api/auth-api";
import { View } from "react-native";

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => (
    <View style={{ flex: 1 }}>
        {/*@ts-ignore*/}
        <Calculator style={{ flex: 1 }} />
        {/*@ts-ignore*/}
        <Button mode="outlined" onPress={() => logoutUser()}>
            Logout
        </Button>
    </View>
);

export default memo(Dashboard);
