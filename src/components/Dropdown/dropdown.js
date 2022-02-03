export default function DropdownList(props) {
  return(
      <div className={`${props.classProp} eachDropdown`}>
          <label className={`mt-2 dropdownLabel`}>{props.labelProp}</label>
          <select className={`${props.selectClass} form-control`} onChange={props.onChangeProp} value={props.selectedValue}>
              {props.listValues.map(listValue => <option key={listValue.id} value={listValue.id}>{listValue.name}</option>)}
          </select>
      </div>
  )
}