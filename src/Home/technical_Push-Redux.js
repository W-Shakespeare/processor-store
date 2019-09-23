function Push_Redux() {
  let processorArr = createArr("processor");
  let processorFamilyArr = createArr("processorFamily");
  let yadroArr = createArr("yadro");

  let processorArrCheck = filterCheck(processorArr);
  let processorFamilyCheck = filterCheck(processorFamilyArr);
  let yadroArrCheck = filterCheck(yadroArr);

  function createArr(classNameItem) {
    let inputItem = document.getElementsByClassName(classNameItem);
    let arrItem = [];
    for (let i = 0; i < inputItem.length; i++) {
      let oneInpElement = inputItem[i];
      let objectInp = {
        checked: oneInpElement.checked,
        value: oneInpElement.value
      };
      arrItem.push(objectInp);
    }
    return arrItem;
  }
  function filterCheck(arr) {
    let checkedArr = arr
      .filter(item => {
        return item.checked == true;
      })
      .map(item => item.value);
    console.log(checkedArr);
  }
  this.props.result(result);
  //console.log("Push_Redux");
}


let f=[]
let y=['2','4']
 let p = ['AMD']
let arrAll = [];
arrAll.push(f) 
arrAll.push(y)
arrAll.push(p)
let obj = arrAll.reduce((acc,next,i,ar)=>{
acc['famal']=ar[0].map((item)=>item)
acc['core']=ar[1].map((item)=>item)
acc['manuf']=ar[2].map((item)=>item)
return acc
},{})
console.log(obj)
let obj = {
    famal:
}
console.log(obj)
 //let arrAll=[]
 //arrAll.concat(p,y);
 
 
 let red = arrs.reduce(acc,next=>{
acc['coreAmount']=
 },{})
     
 }


const obj = {
    coreAmount: { "2": true },
    manufacturer: { intel: true },
    modelType: { i3: true, i5: true }
  };


  
let f=[]
let c=['2','4']
 let p = ['AMD']

function ChangeArrToObj(arr){
     let item = arr.reduce((acc,next)=> {return acc[next]=true},{})
     return item;
}
 let yadro = ChangeArrToObj(c);
 let classs = ChangeArrToObj(p)
 let processorFamily = ChangeArrToObj(f)

 let obj2 = {...obj,coreAmount:core,manufacturer:pro}

 console.log(obj2)  




 let obj = {};
obj.name = "Kirill";
obj.age = 24;
console.log(obj);
let obj2 = { ...obj, age: 25 };
console.log(obj2);





////////////////////
var i9k = {
    processorFamily: "Intel Core i9",
    intelGeneration: "Coffee Lake (девятое)",
    tdp: "95 Вт",
    frequency: "3600 МГц",
    yadro: "8",
    classs: "Intel",
  };
  
  var i7k = {
    yadro: "8",
    classs: "Intel",
    name: "Intel Core i7-9700K",
    
  };
  var i76k = {
    
    yadro: "4",
    classs: "Intel",
    name: "Intel Core i7-7700K ",
    price: "12200 грн",
    price2: "12200",
    src:
      "https://i2.rozetka.ua/goods/1820386/intel_core_i7_7700k_images_1820386673.jpg"
  };
  let processors = [i9k,i7k,i76k]

 const obj = {
        yadro: { "8": true },
        classs: { Intel: false },
        processorFamily: { i3: true, i5: true }
      };
     // console.log(Object.keys(obj)) 
      //console.log(Object.values(obj['yadro']).some(e => e))

      function shouldItFilter(filterName) {
        return Object.values(obj[filterName]).some(e => e);
      }
      function filterProcessorsByField(fieldName, processors) {
          console.log(fieldName)
        const filterValue = obj[fieldName];
        return processors.filter(p => filterValue[p[fieldName]]);
      }
      const result = Object.keys(obj).reduce((acc, filterName) => { 
        if (shouldItFilter(filterName)) {
          return filterProcessorsByField(filterName, acc);
        }
        return acc;
      }, processors);
      console.log(result)






















///////////////////////////////////
selectCheck = props => {
    let select = document.getElementsByClassName("select-1");
    console.log(select[0].children[0].value);

    let arr = [];
    let result3 = this.props.reduxState.arrProcessorItem;
    let result2 = [...result3];
    console.dir(result2);
    for (var i = 0; i < select[0].length; i++) {
      if (select[0].children[i].selected) {
        if (select[0].children[i].value == 0) {
            let pr = [this.inpSearch()];
            let pr2 = pr[0];
          console.log(pr2);
          this.props.result(pr2);
          return;
        } else {
            let selectValue = select[0].children[i].value;
          arr.push(selectValue);
        }
      }
    }
    
    if (arr[0] == 1) {
      result2.sort((item1, item2) => item1.price2 - item2.price2);
    }
    if (arr[0] == 2) {
      result2.sort((item1, item2) => item2.price2 - item1.price2);
    }

    this.props.result(result2);
    console.log(arr);
  };




