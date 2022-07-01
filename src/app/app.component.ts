import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'angularTreeTable';
  data = [{
    "transaction": {
      "transactionID": "",
      "transactionTime": "",
      "Language": ""
    },
    "inquiry": {
      "duns": "",
      "Language": "",
      "blockId": {
        "block1": "",
        "block2": ""
      }
    },
    "organization": {
      "country": "",
      "primaryName": "",
      "Assessment": {
        "failureScore": {
          "classScore": "",
          "classDescription": "",
          "scoreModel": {
            "code": "",
            "desc": ""
          },
          "nationalId": "",
          "scoreCommentry": {
            "desc": "",
            "code": "",
          },
        },
        "MainScore": {
          "classScore": "",
          "scoreDate": "",
          "historyRating": {
            "desc": "",
            "code": ""
          }
        },
        "nordacc": {
          "rating": "",
          "scoreDate": "",
          "financial": {
            "desc": "",
            "code": ""
          },
          "risk": {
            "desc": "",
            "code": ""
          }
        }
      },
      "layOff": {
        "scoreDate": "",
        "probablity": "",
        "peersClass": ""
      },
      "delinquiryScore": [
        {
          "calc": "",
          "industryNorms": {
            "nationalPercentaile": {
              "code": "",
              "desc": ""
            }
          },
          "riskIdence": {
            "low": "",
            "medain": "",
            "high": ""
          }
        }
      ]
    },
    "blockId": [
      {
        "blockID": "",
        "status": "",
        "reason": ""
      }
    ]
  }]

  TREE_DATA:any[] = []
  constructor() {

  }

  ngOnInit(): void {
    let parentObj = {name:"Delight Insights"}
   let treeData = this.toArrayTree(this.data[0], undefined)
   let finalObj = {children:[...treeData], ...parentObj}
   this.TREE_DATA.push(finalObj);
   console.log(this.TREE_DATA)
  }

  toArrayTree(obj:any, idc: any) {
    return Object.keys(obj).map((key, index) => {
      return typeof obj[key] === 'object'
        ? {
            name: key,
            idx: idc || index,
            children: [...this.toArrayTree(obj[key], index)],
          }
        : { name: key, idx: idc, [key]: obj[key] };
    });
  }

 
}