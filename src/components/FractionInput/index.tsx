import { FunctionalComponent, h } from "preact";
import { useRef } from "preact/compat";
import type { Fraction } from "../../models/fraction";
import style from "./style.css";

interface FractionInputProps extends Fraction {
  onChange: (fraction: Fraction) => void;
}

const FractionInput: FunctionalComponent<FractionInputProps> = ({
  numerator,
  denominator,
  onChange,
}) => {
  const numeratorRef = useRef<HTMLInputElement | null>(null);
  const denominatorRef = useRef<HTMLInputElement | null>(null);

  const emitFraction = () => {
    const newNumerator = parseInt(numeratorRef.current!.value, 10);
    const newDenominator = parseInt(denominatorRef.current!.value, 10);
    if (!isNaN(newNumerator) && !isNaN(newDenominator)) {
      onChange({ numerator: newNumerator, denominator: newDenominator });
    }
  };

  return (
    <div className={style.fraction}>
      <input
        className={style.input}
        type="number"
        value={numerator}
        onInput={emitFraction}
        ref={numeratorRef}
        min="1"
      />
      <hr className={style.line} />
      <input
        className={style.input}
        type="number"
        value={denominator}
        onInput={emitFraction}
        ref={denominatorRef}
        min="1"
      />
    </div>
  );
};

export default FractionInput;
