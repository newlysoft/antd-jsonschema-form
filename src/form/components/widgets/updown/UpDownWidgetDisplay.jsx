import React from "react";
import PropTypes from "prop-types";
import { InputNumber } from "antd";
import { getOffspringSchema, getFormValue } from '../../../utils';






const UpDownWidgetDisplay = (props) => {
  const { schema, uiSchema, formData, onChange, onBlur, ...otherProps } = props;
  const { fieldPath } = uiSchema;
  const offSpringSchema = getOffspringSchema(schema, fieldPath);
  const formValue = getFormValue(formData, fieldPath);

  const value = (formValue || offSpringSchema.default);


  const valueProps = { value: (value || undefined) };
  //console.log(valueProps, "valueProps");

  return <span>
    {value}
  </span>
}



// if (process.env.NODE_ENV !== "production") {
//   UpDownWidgetDisplay.propTypes = {
//     value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   };
// }

export default UpDownWidgetDisplay;