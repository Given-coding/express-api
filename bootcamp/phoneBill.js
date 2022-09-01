function totalPhoneBill(callandsms) {
    let total = 0;
    let Bill = callandsms.split(', ');
    for (i = 0; i < Bill.length; i++) {
      if (Bill[i].startsWith("sms")) {
      total += 0.65;
    } else if (Bill[i].startsWith("call")){
      total += 2.75;
    }
      
  }
  return "R" + total.toFixed(2);
  }