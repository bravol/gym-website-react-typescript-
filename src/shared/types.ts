export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  Classes = "classes",
  Contact = "contact",
}

//Benefit object
export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

//classType object
export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
