export const mutations = {
  setInputSentences(state, payload) {
    if (Array.isArray(payload)) {
      payload = payload.join("\n");
    }
    let lines = payload.split("\n");
    state.inputSentences = lines.map((s, i) => ({ id: i, text: s }));
  },
  addClass(state, payload) {
    let existing = state.classes.find((c) => c.name == payload);
    if (existing) {
      return;
    }
    let lastIndex = state.classes.reduce((p, c) => {
      return c.id > p ? c.id : p;
    }, 0);
    state.classes.push({
      id: lastIndex + 1,
      name: payload,
    });
    if (state.classes.length === 1) {
      state.currentClass = state.classes[0];
    }
  },
  removeClass(state, payload) {
    state.classes = state.classes.filter((c) => c.id != payload);
    if (state.currentClass.id === payload) {
      state.currentClass = state.classes[0];
    }
  },
  setCurrentClass(state, payload) {
    state.currentClass = state.classes.find((c) => c.id === payload);
  },
  addAnnotation(state, payload) {
    state.annotations.push(payload);
  }
};

export const getters = {};
export default {
  state() {
    return {
      classes: [],
      inputSentences: [],
      annotations: [],
      currentClass: {},
    };
  },
  getters,
  mutations,
  actions: {},
};
