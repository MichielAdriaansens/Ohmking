// (volt / y) * volt = Wattage
import { useState } from "react";

function Calculator() {

    const [values, setValues] = useState({ volt: '', ohm: '', current: '', watts: '0' });
    const [showFormula, setShowFormula] = useState(false);
    const [formulaType, setFormulaType] = useState('1');

    function calculateWatts() {
        //calculate current (i)
        let i = values.volt / values.ohm;
        //calculate wattage (w)
        let w = Math.round(i * values.volt);

        setValues({ ...values, current: i, watts: w });
    }

    function RenderFormula() {
        return formulaType === "1" ? (<>({values.volt}V / {values.ohm}Ω) * {values.volt}V = {values.watts}W</>
        ) : (<>{values.volt}V / {values.ohm}Ω = {Number(values.current).toFixed(2)}A</>)
    }

    function inputHandler(value) {
        let input = value.replace(',', '.').replace(/[a-z]/i, '');

        return input;
    }
    function enterKeyHandler(e) {

        if (e.key === 'Enter') {
            calculateWatts();
        }
    }
    function selectHandler(e) {
        setFormulaType(e.target.value);
    }

    return (
        <div className="calculator">
            <select id="formula-type" onChange={selectHandler}>
                <option value='1'>Watts</option>
                <option value='2'>Amp</option>
            </select>
            <br />
            Battery Voltage: <input className="input-txt"
                placeholder=" Volts"
                value={values.volt}
                onChange={(e) => { setValues({ ...values, volt: inputHandler(e.target.value) }) }}
                onKeyDown={enterKeyHandler}
            />
            <br />
            Coil resistance: <input className="input-txt"
                placeholder=" Ohm"
                value={values.ohm} onChange={(e) => { setValues({ ...values, ohm: inputHandler(e.target.value) }) }}
                onKeyDown={enterKeyHandler}
            />
            <br />
            <br />
            <button className="calc-button" onClick={calculateWatts}>{'[[Calculate]]'}</button>
            <br />
            {formulaType === "1" ? <h2>W = {values.watts}</h2> : <h2>A = {Number(values.current).toFixed(2)}</h2>}

            <div
                className="formula-button"
                onClick={() => { showFormula ? setShowFormula(false) : setShowFormula(true) }}
            >
                {showFormula ? <RenderFormula /> : <> show formula</>}
            </div>

        </div>
    )
}

export default Calculator;