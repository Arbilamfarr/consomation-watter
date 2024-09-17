import { NavigationContainer } from "@react-navigation/native";
import StackNav from "../components/Navigation/StackNav";

export default function Index() {
  return (
    <>
      <NavigationContainer independent={true}>
        <StackNav />
      </NavigationContainer>
    </>
  );
}
