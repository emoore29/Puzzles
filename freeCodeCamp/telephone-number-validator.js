function telephoneCheck(str) {
    
    let regex1 = /^\d{3}-\d{3}-\d{4}$/  // 555-555-5555
    let regex2 = /^\(\d{3}\)\d{3}-\d{4}$/  // (555)555-5555
    let regex3 = /^\(\d{3}\)\s\d{3}-\d{4}$/  // (555) 555-5555
    let regex4 = /^\d{3}\s\d{3}\s\d{4}$/  // 555 555 5555
    let regex5 = /^\d{10}$/  // 5555555555
    let regex6 = /^1\s\d{3}\s\d{3}\s\d{4}$/ // 1 555 555 5555
    let regex7 = /^1\s\d{3}-\d{3}-\d{4}$/ // 1 555-555-5555
    let regex8 = /^1\(\d{3}\)\d{3}-\d{4}$/ // 1(555)555-5555
    let regex9 = /^1\s\(\d{3}\)\s\d{3}-\d{4}$/ //1 (555) 555-5555


    if (regex1.test(str) || 
    regex2.test(str) || 
    regex3.test(str) || 
    regex4.test(str) || 
    regex5.test(str) || 
    regex6.test(str) || 
    regex7.test(str) || 
    regex8.test(str) ||
    regex9.test(str)) {
        return true;
    }
    return false;
  }
  
  console.log(telephoneCheck("2 (757) 622-7382"));