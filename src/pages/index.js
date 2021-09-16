<select>
{[1,2,3].map(speed => (
  <option 
  key={`speedChange_${speed}`}
  >
    {speed}
  </option>
))} 
</select>