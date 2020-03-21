
  n = [
    {
      id: "q01",
      xmlCode: "A",
      category: "personalInfo",
      comment: null,
      text: "q01_text",
      inputType: "radio",
      options: [
        "q01_option0",
        "q01_option1",
        "q01_option2",
        "q01_option3",
        "q01_option4",
        "q01_option5"
      ],
      nextQuestionMap: null,
      scoreMap: null
    },
    {
      id: "q02",
      xmlCode: "B",
      category: "personalInfo",
      comment: null,
      text: "q02_text",
      inputType: "radio",
      options: ["q02_option0", "q02_option1"],
      nextQuestionMap: null,
      scoreMap: null
    },
    {
      id: "q03",
      xmlCode: "C",
      category: "personalInfo",
      comment: null,
      text: "q03_text",
      inputType: "radio",
      options: ["q03_option0", "q03_option1", "q03_option2"],
      nextQuestionMap: null,
      scoreMap: null
    },
    {
      id: "q04",
      xmlCode: "D",
      category: "personalInfo",
      comment: null,
      text: "q04_text",
      inputType: "radio",
      options: ["answer_yes", "answer_no"],
      nextQuestionMap: null,
      scoreMap: null
    },
    {
      id: "q05",
      xmlCode: "E",
      category: "travelling",
      comment: null,
      text: "q05_text",
      inputType: "radio",
      options: ["answer_yes", "answer_no"],
      nextQuestionMap: ["q06", "q18"],
      scoreMap: null
    },
    {
      id: "q06",
      xmlCode: "F",
      category: "travelling",
      comment: null,
      text: "q06_text",
      inputType: "radio",
      options: ["answer_yes", "answer_no"],
      nextQuestionMap: ["q42", "q07"],
      scoreMap: [1, 0]
    },
    {
      id: "q42",
      xmlCode: "R1",
      category: "returning",
      comment: null,
      text: "q42_text",
      inputType: "date",
      options: null,
      nextQuestionMap: "q07",
      scoreMap: null
    },
    {
      id: "q07",
      xmlCode: "G",
      category: "travelling",
      comment: null,
      text: "q07_text",
      inputType: "radio",
      options: ["answer_yes", "answer_no"],
      nextQuestionMap: ["q08", "q18"],
      scoreMap: null
    },
    {
      id: "q08",
      xmlCode: "H",
      category: "travelling",
      comment: null,
      text: "q08_text",
      inputType: "radio",
      options: [
        "q08_option0",
        "q08_option1",
        "q08_option2",
        "q08_option3",
        "q08_option4",
        "q08_option5",
        "q08_option6",
        "q08_option7",
        "q08_option8"
      ],
      nextQuestionMap: [
        "q09",
        "q10",
        "q11",
        "q12",
        "q13",
        "q14",
        "q15",
        "q16",
        "q18"
      ],
      scoreMap: [1, 1, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      id: "q09",
      xmlCode: "I",
      category: "travelling",
      comment: null,
      text: "q09_text",
      inputType: "radio",
      options: [
        "q09_option0",
        "q09_option1",
        "q09_option2",
        "q09_option3",
        "answer_region_no"
      ],
      nextQuestionMap: "q17",
      scoreMap: [1, 1, 1, 1, 0]
    },
    {
      id: "q10",
      xmlCode: "J",
      category: "travelling",
      comment: null,
      text: "q10_text",
      inputType: "radio",
      options: ["q10_option0", "q10_option1", "answer_region_no"],
      nextQuestionMap: "q17",
      scoreMap: [1, 1, 0]
    },
    {
      id: "q11",
      xmlCode: "K",
      category: "travelling",
      comment: null,
      text: "q11_text",
      inputType: "radio",
      options: ["q11_option0", "answer_region_no"],
      nextQuestionMap: "q17",
      scoreMap: [1, 0]
    },
    {
      id: "q12",
      xmlCode: "L",
      category: "travelling",
      comment: null,
      text: "q12_text",
      inputType: "radio",
      options: ["q12_option0", "answer_region_no"],
      nextQuestionMap: "q17",
      scoreMap: [1, 0]
    },
    {
      id: "q13",
      xmlCode: "M",
      category: "travelling",
      comment: null,
      text: "q13_text",
      inputType: "radio",
      options: ["q13_option0", "answer_region_no"],
      nextQuestionMap: "q17",
      scoreMap: [1, 0]
    },
    {
      id: "q14",
      xmlCode: "N",
      category: "travelling",
      comment: null,
      text: "q14_text",
      inputType: "radio",
      options: ["q14_option0", "answer_region_no"],
      nextQuestionMap: "q17",
      scoreMap: [1, 0]
    },
    {
      id: "q15",
      xmlCode: "O",
      category: "travelling",
      comment: null,
      text: "q15_text",
      inputType: "radio",
      options: ["q15_option0", "answer_region_no"],
      nextQuestionMap: "q17",
      scoreMap: [1, 0]
    },
    {
      id: "q16",
      xmlCode: "TB",
      category: "travelling",
      comment: null,
      text: "q16_text",
      inputType: "radio",
      options: [
        "q16_option0",
        "q16_option1",
        "q16_option2",
        "answer_region_no"
      ],
      nextQuestionMap: "q17",
      scoreMap: [1, 1, 1, 0]
    },
    {
      id: "q17",
      xmlCode: "R3",
      category: "returning",
      comment: null,
      text: "q17_text",
      inputType: "date",
      options: null,
      nextQuestionMap: null,
      scoreMap: null
    },
    {
      id: "q18",
      xmlCode: "Q",
      category: "contact",
      comment: "q18_comment",
      text: "q18_text",
      inputType: "radio",
      options: ["answer_yes", "answer_no"],
      nextQuestionMap: ["q20", "q19"],
      scoreMap: [1, 0]
    },
    {
      id: "q19",
      xmlCode: "R",
      category: "contact",
      comment: "q19_comment",
      text: "q19_text",
      inputType: "radio",
      options: ["answer_yes", "answer_no"],
      nextQuestionMap: ["q20", "q21"],
      scoreMap: [1, 0]
    },
    {
      id: "q20",
      xmlCode: "B8",
      category: "contact",
      comment: null,
      text: "q20_text",
      inputType: "date",
      options: null,
      nextQuestionMap: null,
      scoreMap: null
    },
    {
      id: "q21",
      xmlCode: "T",
      category: "symptomsMediumRisk",
      comment: null,
      text: "q21_text",
      inputType: "radio",
      options: ["answer_yes", "answer_no"],
      nextQuestionMap: ["q23", "q22"],
      scoreMap: [1, 0]
    },
    {
      id: "q22",
      xmlCode: "U",
      category: "symptomsMediumRisk",
      comment: null,
      text: "q22_text",
      inputType: "radio",
      options: ["answer_yes", "answer_no"],
      nextQuestionMap: ["q23", "q24"],
      scoreMap: [1, 0]
    },
    {
      id: "q23",
      xmlCode: "V",
      category: "symptomsMediumRisk",
      comment: null,
      text: "q23_text",
      inputType: "radio",
      options: [
        "q23_option0",
        "q23_option1",
        "q23_option2",
        "q23_option3",
        "q23_option4",
        "q23_option5",
        "q23_option6",
        "q23_option7"
      ],
      nextQuestionMap: null,
      scoreMap: null
    },
    {
      id: "q24",
      xmlCode: "W",
      category: "symptoms",
      comment: null,
      text: "q24_text",
      inputType: "radio",
      options: ["answer_yes", "answer_no"],
      nextQuestionMap: null,
      scoreMap: [1, 0]
    },
    {
      id: "q25",
      xmlCode: "X",
      category: "symptoms",
      comment: null,
      text: "q25_text",
      inputType: "radio",
      options: ["answer_yes", "answer_no"],
      nextQuestionMap: null,
      scoreMap: [1, 0]
    },
    {
      id: "q26",
      xmlCode: "Y",
      category: "symptoms",
      comment: null,
      text: "q26_text",
      inputType: "radio",
      options: ["answer_yes", "answer_no"],
      nextQuestionMap: null,
      scoreMap: [1, 0]
    },
    {
      id: "q27",
      xmlCode: "Z",
      category: "symptomsMediumRisk",
      comment: null,
      text: "q27_text",
      inputType: "radio",
      options: ["answer_yes", "answer_no"],
      nextQuestionMap: null,
      scoreMap: [1, 0]
    },
    {
      id: "q28",
      xmlCode: "A0",
      category: "symptoms",
      comment: null,
      text: "q28_text",
      inputType: "radio",
      options: ["answer_yes", "answer_no"],
      scoreMap: [1, 0]
    },
    {
      id: "q29",
      xmlCode: "A1",
      category: "symptoms",
      comment: null,
      text: "q29_text",
      inputType: "radio",
      options: ["answer_yes", "answer_no"],
      nextQuestionMap: null,
      scoreMap: [1, 0]
    },
    {
      id: "q30",
      xmlCode: "A2",
      category: "symptoms",
      comment: null,
      text: "q30_text",
      inputType: "radio",
      options: ["answer_yes", "answer_no"],
      nextQuestionMap: null,
      scoreMap: [1, 0]
    },
    {
      id: "q31",
      xmlCode: "A3",
      category: "symptoms",
      comment: null,
      text: "q31_text",
      inputType: "radio",
      options: ["answer_yes", "answer_no"],
      nextQuestionMap: null,
      scoreMap: [1, 0]
    },
    {
      id: "q32",
      xmlCode: "B7",
      category: "symptomsHighRisk",
      comment: null,
      text: "q32_text",
      inputType: "radio",
      options: ["answer_yes", "answer_no"],
      nextQuestionMap: null,
      scoreMap: [1, 0]
    },
    {
      id: "q33",
      xmlCode: "B9",
      category: "symptoms",
      comment: null,
      text: "q33_text",
      inputType: "date",
      options: null,
      nextQuestionMap: null,
      scoreMap: null
    },
    {
      id: "q34",
      xmlCode: "A5",
      category: "illnesses",
      comment: null,
      text: "q34_text",
      inputType: "radio",
      options: ["answer_yes", "answer_no", "answer_unknown"],
      nextQuestionMap: null,
      scoreMap: null
    },
    {
      id: "q35",
      xmlCode: "A6",
      category: "illnesses",
      comment: null,
      text: "q35_text",
      inputType: "radio",
      options: ["answer_yes", "answer_no", "answer_unknown"],
      nextQuestionMap: null,
      scoreMap: null
    },
    {
      id: "q36",
      xmlCode: "A7",
      category: "illnesses",
      comment: null,
      text: "q36_text",
      inputType: "radio",
      options: ["answer_yes", "answer_no", "answer_unknown"],
      nextQuestionMap: null,
      scoreMap: null
    },
    {
      id: "q37",
      xmlCode: "A8",
      category: "illnesses",
      comment: null,
      text: "q37_text",
      inputType: "radio",
      options: ["answer_yes", "answer_no", "answer_unknown"],
      nextQuestionMap: null,
      scoreMap: null
    },
    {
      id: "q38",
      xmlCode: "A9",
      category: "pregnancy",
      comment: null,
      text: "q38_text",
      inputType: "radio",
      options: ["answer_yes", "answer_no", "answer_unknown"],
      nextQuestionMap: null,
      scoreMap: null
    },
    {
      id: "q39",
      xmlCode: "B0",
      category: "medication",
      comment: null,
      text: "q39_text",
      inputType: "radio",
      options: ["answer_yes", "answer_no", "answer_unknown"],
      nextQuestionMap: null,
      scoreMap: null
    },
    {
      id: "q40",
      xmlCode: "B1",
      category: "medication",
      comment: "q40_comment",
      text: "q40_text",
      inputType: "radio",
      options: ["answer_yes", "answer_no", "answer_unknown"],
      nextQuestionMap: null,
      scoreMap: null
    },
    {
      id: "q41",
      xmlCode: "B2",
      category: "medication",
      comment: null,
      text: "q41_text",
      inputType: "radio",
      options: ["answer_yes", "answer_no"],
      nextQuestionMap: null,
      scoreMap: null
    }
  ]