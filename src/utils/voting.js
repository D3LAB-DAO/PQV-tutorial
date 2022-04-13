export const collapseNavbar = () => {
  var element = document.getElementById("navbarNav");
  element.classList.remove("show");
}

export const calLinear = (data) => {
  const preset = splitVoting(data);

  let result = 0;
  preset.forEach((element) => {
    result += Number(element);
  });

  return result;
};

export const calQV = (data) => {
  const preset = splitVoting(data);

  let result = 0;
  preset.forEach((element) => {
    result += Math.sqrt(Number(element));
  });

  return result;
};

export const calSybil = (data) => {
  const preset = splitVoting(data);

  let result = 0;
  preset.forEach((element) => {
    result += Number(element);
  });

  return result;
};

export const calPQV = (data) => {
  const preset = splitVoting(data);

  let result = 0;
  preset.forEach((element) => {
    result += Number(element) * Math.sqrt(Number(element));
  });

  return result;
};

export const splitVoting = (data) => {
  const tmp = data.replace(/(\s*)/g, "");
  const result = tmp.split(",");

  return result;
};