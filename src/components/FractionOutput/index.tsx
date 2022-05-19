import { FunctionalComponent, Fragment, h } from "preact";
import type { Fraction } from "../../models/fraction";
import FractionViz from "../FractionViz";
import style from "./style.css";

interface FractionOutputProps {
  denominator: number;
  fraction: Fraction;
  color: string;
}

const FractionOutput: FunctionalComponent<FractionOutputProps> = ({
  fraction,
  denominator,
  color,
}) => {
  const numerator = (denominator / fraction.denominator) * fraction.numerator;

  return (
    <div>
      <div className={style.fraction}>
        <span className={style.number}>{numerator}</span>
        <hr className={style.line} />
        <span className={style.number}>{denominator}</span>
      </div>
      <FractionViz
        color={color}
        numerator={numerator}
        denominator={denominator}
      />
    </div>
  );
};

export default FractionOutput;
