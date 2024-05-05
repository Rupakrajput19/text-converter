import { React, useState } from "react";
import { Box, TextField, Button } from "@mui/material";

export default function TextArea({ darkMode, textColor, reverseColor }) {
  const [textValue, setTextValue] = useState("");
  const [words, setWords] = useState(0);
  const [canShow, setCanShow] = useState(false);
  const [isWarning, setWarning] = useState(false);

  const styleWord = {
    textAlign: "center",
    paddingTop: "10px",
}
  const styleWarning = {
    color: "#ff0000",
    textAlign: "center",
    paddingTop: "10px",
}

const onFieldChange = (e) => {
    const value = e.target.value;
    setTextValue(value);
    setWarning(!value);
    setCanShow(false);
};

  const OnClickBtn = (action) => {
    let newValue = "";
    setWarning(!textValue);
    setCanShow(false);
    switch (action) {
      case "upper":
        newValue = textValue.toUpperCase();
        break;
      case "lower":
        newValue = textValue.toLowerCase();
        break;
      case "capitalize":
        newValue = textValue.replace(/\b\w/g, c => c.toUpperCase());
        // newValue = textValue.charAt(0).toUpperCase() + textValue.slice(1).toLowerCase();
        break;
      case "words":
        const wordsCount = textValue.split(/\s+/).filter((word) => word !== "").length;
        newValue = textValue;
        setWords(wordsCount);
        setCanShow(true);
        break;
      default:
        newValue = "";
        break;
    }
    setTextValue(newValue);
  };
  
  return (
    <>
      <Box className="textarea_field">
        <TextField
          id="text"
          multiline
          rows={10}
          name="text"
          label="Enter Text to Convert"
          variant="outlined"
          className="input_field"
          value={textValue}
          onChange={onFieldChange}
          required
          sx={{
            "& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root" : {
              color: textColor,
            },
            "& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root": {
              color: textColor,
            },
            "& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
              color: textColor,
            },
            "& .css-1ald77x": { //for live site classes because it was not working, for text field label color that outside the box
              color: textColor,
            },
            "& .css-1ald77x.Mui-focused": {
              color: textColor,
            },
            "& .css-p0rm37": { //for text field label color that inside the box
              color: textColor,
            },
            "& .MuiOutlinedInput-root": {
              color: textColor,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: textColor,
              },
              "&.Mui-focused": {
                color: textColor,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: textColor,
                },
                "& .MuiInputLabel-outlined": {
                  color: textColor,
                  "&.Mui-focused": {
                    color: textColor,
                  },
                },
              },
            },
          }}
        />
      </Box>
      <Box className="button_box">
        <Button
          variant="contained"
          id="capitalize_btn"
          onClick={() => OnClickBtn("capitalize")}
          style={{ color: reverseColor }}
        >
          Capitalize
        </Button>
        <Button
          variant="contained"
          id="upper_btn"
          onClick={() => OnClickBtn("upper")}
          style={{ color: reverseColor }}
        >
          Upper
        </Button>
        <Button
          variant="contained"
          id="lower_btn"
          onClick={() => OnClickBtn("lower")}
          style={{ color: reverseColor }}
        >
          Lower
        </Button>
        <Button
          variant="contained"
          id="words_btn"
          onClick={() => OnClickBtn("words")}
          style={{ color: reverseColor }}
        >
          No. of Words
        </Button>
        <Button variant="contained" id="clear_btn" onClick={OnClickBtn} 
          style={{ color: reverseColor }}
        >
          Clear
        </Button>
      </Box>
      {!isWarning && canShow ? <div style={styleWord}>Number Of Words: {words}</div> : ""}
      {isWarning ? <div style={styleWarning}>Please Enter Something In Text Field!</div> : ""}
    </>
  );
}
