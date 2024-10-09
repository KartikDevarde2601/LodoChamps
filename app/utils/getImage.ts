import { colors } from "app/theme";
import {Dice} from "./constant/constant"

interface pilesImage {
  name: string;
  image: any;  
}

interface DiceImage {
  name: number;
  image: any;
}

export class BackgroundImage {
  private static PileImages: Array<pilesImage> = [
    {
      name: colors.palette.diceGreen,
      image: require('../../assets/images/piles/green.png'),
    },
    {
      name: colors.palette.diceRed,
      image: require('../../assets/images/piles/red.png'),
    },
    {
      name: colors.palette.diceBlue,
      image: require('../../assets/images/piles/blue.png'),
    },
    {
      name: colors.palette.diceYellow,
      image: require('../../assets/images/piles/yellow.png'),
    },
  ];


  private static DiceImages: Array<DiceImage> = [
    {
      name: Dice.one,
      image: require('../../assets/images/dice/1.png'),
    },
    {
      name: Dice.two,
      image: require('../../assets/images/dice/2.png'),
    },
    {
      name: Dice.three,
      image: require('../../assets/images/dice/3.png'),
    },
    {
      name: Dice.four,
      image: require('../../assets/images/dice/4.png'),
    },
    {
      name: Dice.five,
      image: require('../../assets/images/dice/5.png'),
    },
    {
      name: Dice.six,
      image: require('../../assets/images/dice/6.png'),
    }
  ]

  static GetPileImage = (name: string | number): any => {
    const found = this.PileImages.find((e) => e.name === name); 
    return found ? found.image : undefined;
  };

  static GetDiceImage = (name:number): any => {
    const found = this.DiceImages.find((e) => e.name === name);
    return found ? found.image : undefined;
  };
}
