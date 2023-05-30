import { Container1 } from "../../components/Container/Container1";
import { Container2 } from "../../components/Container/Container2";
import { Container3 } from "../../components/Container/Container3";
import { Container4 } from "../../components/Container/Container4";
import { Container5 } from "../../components/Container/Container5";
import { Container6 } from "../../components/Container/Container6";


export const getContainerComponent = (componentName) => {
    switch (componentName) {
      case "Container1":
        return Container1;
      case "Container2":
        return Container2;
      case "Container3":
        return Container3;
      case "Container4":
        return Container4;
      case "Container5":
        return Container5;
      case "Container6":
        return Container6;
      default:
        return null;
    }
  };
  