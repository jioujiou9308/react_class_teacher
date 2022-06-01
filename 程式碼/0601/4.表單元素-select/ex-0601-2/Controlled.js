import { useState, Fragment } from 'react'

function Controlled() {
  const [inputText, setInputText] = useState('')
  const [textArea, setTextArea] = useState('')

  // radio group
  const [gender, setGender] = useState('')
  const genderOptions = ['男', '女', '不提供']

  // select
  const [selectedValue, setSelectedValue] = useState('')
  const carOptions = ['Volvo', 'Saab', 'Opel', 'Audi']

  return (
    <>
      <section id="input-text">
        <h1>文字輸入框</h1>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </section>
      <section id="textarea">
        <h1>文字輸入區域</h1>
        <textarea
          value={textArea}
          onChange={(e) => {
            setTextArea(e.target.value)
          }}
        />
      </section>
      <section id="radio-group">
        <h1>選項按鈕(群組)</h1>
        {genderOptions.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="radio"
                value={v}
                checked={gender === v}
                onChange={(e) => {
                  setGender(e.target.value)
                }}
              />
              <label>{v}</label>
            </div>
          )
        })}
      </section>
      <section id="select">
        <h1>下拉清單</h1>
        <label>車子品牌:</label>
        <select
          value={selectedValue}
          onChange={(e) => {
            setSelectedValue(e.target.value)
          }}
        >
          <option value="">請選擇</option>
          {carOptions.map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            )
          })}
        </select>
      </section>
    </>
  )
}

export default Controlled
