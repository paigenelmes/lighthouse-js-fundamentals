const judgeVegetable = function(vegetables, metric) {
  let score = 0;
  let submitter = "";

  for (let i = 0; i < vegetables.length; i++) {
    if (score < vegetables[i][metric]) {
      score = vegetables[i][metric];
      submitter = vegetables[i].submitter;
    }
  }
  return submitter;
}