import React, {useState, useEffect, useCallback, useRef} from 'react';
import clsx from "clsx";

const InputPriceRange = ({ min, max }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  return (
      <div className='input-price-range'>
        <input
          type="range"
          min={min}
          max={max}
          defaultValue={minVal}
          ref={minValRef}
          onChange={(event) => {
            const value = Math.min(+event.target.value, maxVal - 1);
            setMinVal(value);
            event.target.value = value.toString();
          }}
          className={clsx("thumb thumb--zindex-3", {
            "thumb--zindex-5": minVal > max - 100
          })}
        />
        <input
          type="range"
          min={min}
          max={max}
          defaultValue={maxVal}
          ref={maxValRef}
          onChange={(event) => {
            const value = Math.max(+event.target.value, minVal + 1);
            setMaxVal(value);
            event.target.value = value.toString();
          }}
          className="thumb thumb--zindex-4"
        />

        
        <div className="slider">
          <div className="slider__track" />
          <div ref={range} className="slider__range" />
          <div className="slider__inputs-value">
            <label className='slider__inputs-label' htmlFor="minval">
              <span className='slider__inputs-text'>Від</span>
              <input className='slider__input' name='minval' defaultValue={minVal} />
            </label>
            <label className='slider__inputs-label margin-left-20px' htmlFor="minval">
              <span className='slider__inputs-text'>До</span>
              <input className='slider__input' name='maxval' defaultValue={maxVal} />
            </label>
          </div>
        </div>
      </div>
      
  );
};

export default InputPriceRange;