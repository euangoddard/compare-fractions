import { FunctionalComponent, h } from "preact";
import { useState } from "preact/compat";
import type { Fraction } from "../models/fraction";
import { getCommonMultiple, getLowestCommonMultiple } from "../utils/maths";
import style from "./app.css";
import FractionInput from "./FractionInput";
import FractionOutput from "./FractionOutput";
import FractionViz from "./FractionViz";

const fractionAColor = "rgb(255, 99, 132)";
const fractionBColor = "rgb(54, 162, 235)";

const App: FunctionalComponent = () => {
  const [fractionA, setFractionA] = useState<Fraction>({
    numerator: 1,
    denominator: 2,
  });
  const [fractionB, setFractionB] = useState<Fraction>({
    numerator: 1,
    denominator: 3,
  });

  const [commonDenominator, setCommonDenominator] = useState<number>(6);
  const [lowestCommonDenominator, setLowestCommonDenominator] =
    useState<number>(6);

  const updateFractionA = (fraction: Fraction) => {
    setFractionA(fraction);
    setCommonDenominator(
      getCommonMultiple(fraction.denominator, fractionB.denominator),
    );
    setLowestCommonDenominator(
      getLowestCommonMultiple(fraction.denominator, fractionB.denominator),
    );
  };
  const updateFractionB = (fraction: Fraction) => {
    setFractionB(fraction);
    setCommonDenominator(
      getCommonMultiple(fraction.denominator, fractionA.denominator),
    );
    setLowestCommonDenominator(
      getLowestCommonMultiple(fraction.denominator, fractionA.denominator),
    );
  };

  return (
    <div id="preact_root">
      <div className={style.fractions}>
        <FractionInput
          onChange={updateFractionA}
          numerator={fractionA.numerator}
          denominator={fractionA.denominator}
        />
        <FractionInput
          onChange={updateFractionB}
          numerator={fractionB.numerator}
          denominator={fractionB.denominator}
        />
      </div>
      <div className={style.fractions}>
        <FractionViz
          numerator={fractionA.numerator}
          denominator={fractionA.denominator}
          color={fractionAColor}
        />
        <FractionViz
          numerator={fractionB.numerator}
          denominator={fractionB.denominator}
          color={fractionBColor}
        />
      </div>
      <section className={style.outcome}>
        <h2>Has a common multiple of {commonDenominator}</h2>
        <p>So we can write:</p>
        <div className={style.fractions}>
          <FractionOutput
            denominator={commonDenominator}
            fraction={fractionA}
            color={fractionAColor}
          />
          <FractionOutput
            denominator={commonDenominator}
            fraction={fractionB}
            color={fractionBColor}
          />
        </div>
      </section>

      <section className={style.outcome}>
        <h2>Has a common lowest multiple of {lowestCommonDenominator}</h2>
        <p>So we can write:</p>
        <div className={style.fractions}>
          <FractionOutput
            denominator={lowestCommonDenominator}
            fraction={fractionA}
            color={fractionAColor}
          />
          <FractionOutput
            denominator={lowestCommonDenominator}
            fraction={fractionB}
            color={fractionBColor}
          />
        </div>
      </section>
    </div>
  );
};

export default App;
