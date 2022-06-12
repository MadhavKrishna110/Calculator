import Head from 'next/head'
import { useState} from 'react'
import {useEffect} from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    const [rem,setRem]=useState(0)
    const [tens,setTens]=useState(1)
    const [num1,setNum1] = useState(0)
    const [numEntered,setNumEntered]=useState(false)
    const [opEntered,setOpEntered]=useState(false)
    const [num2,setNum2] = useState(0)
    const [operator,setOperator] = useState("")
    const [result,setResult]=useState(0)

    useEffect(()=>{
      !num1?setNum1(rem):setNum1(result);
      setTens(1);
      setRem(0);
      console.log(num1);
      
    },[opEntered])
    useEffect((num)=>{
     
        rem===0&& num===0?null:setTens(tens*10);
        
    },[numEntered])
    
    useEffect(()=>{
      calculate();
    },[num2]);

    const getNumber=(num)=>{
      setRem(tens*rem+num);
      console.log(rem);
    }
    
    const calculate=()=>{
      
      switch(operator){
        case '+': setResult(num1+num2);
                  break;
        case '-': setResult(num1-num2);
                  break;
        case '*': setResult(num1*num2);
                  break;
        case '/': setResult((num1/num2).toFixed(4));
                  break; 
        case '%': setResult(num1%num2);
                  break;                                       
      }
    }
  return (
    <div className={styles.container}>
      <Head>
        <title>Calculator</title>
        <meta name="description" content="Calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <form >
      <label> {!num1?rem:num1} {!operator?"_":operator} {!num2&&num1?rem:num2} = {!result?null:result}</label>
      
      </form>
      <table className={styles.table}>
      <tbody>
      <tr>
      <td  ><button className={styles.button} onClick={()=>{sessionStorage.clear()}}> Back </button> </td>
      <td ><button className={styles.button} onClick={()=>{sessionStorage.clear()}}> C</button> </td>
      <td ><button className={styles.button} onClick={()=>{setOperator("%"); setOpEntered(!opEntered);}}> %</button> </td>
      <td ><button className={styles.button} onClick={()=>{setRem(0); setTens(1); setNum1(0); setNum2(0); setResult(0); setOperator(" ") }}> AC </button> </td>

      </tr>
      <tr>
      <td ><button className={styles.button} onClick={()=>{getNumber(7); setNumEntered(!numEntered);}}> 7</button> </td>
      <td ><button className={styles.button} onClick={()=>{getNumber(8); setNumEntered(!numEntered);}}> 8</button> </td>
      <td ><button className={styles.button} onClick={()=>{getNumber(9); setNumEntered(!numEntered);}}> 9</button> </td>
      <td ><button className={styles.button} onClick={()=>{setOperator("/"); setOpEntered(!opEntered);}}> / </button> </td>

      </tr>
      <tr>
      <td ><button className={styles.button} onClick={()=>{getNumber(4); setNumEntered(!numEntered);}}> 4</button> </td>
      <td ><button className={styles.button} onClick={()=>{getNumber(5); setNumEntered(!numEntered);}}> 5</button> </td>
      <td ><button className={styles.button} onClick={()=>{getNumber(6); setNumEntered(!numEntered);}}> 6</button> </td>
      <td ><button className={styles.button} onClick={()=>{setOperator("*"); setOpEntered(!opEntered);}}> x </button> </td>

      </tr>
      <tr>
      <td ><button className={styles.button} onClick={()=>{getNumber(1); setNumEntered(!numEntered);}}> 1</button> </td>
      <td ><button className={styles.button} onClick={()=>{getNumber(2); setNumEntered(!numEntered);}}> 2</button> </td>
      <td ><button className={styles.button} onClick={()=>{getNumber(3); setNumEntered(!numEntered);}}> 3</button> </td>
      <td ><button className={styles.button} onClick={()=>{setOperator("-"); setOpEntered(!opEntered);}}> - </button> </td>

      </tr>
      <tr>
      <td ><button className={styles.button}  onClick={()=>{getNumber(0); setNumEntered(!numEntered);}}> 0 </button> </td>
      <td ><button className={styles.button} onClick={()=>{sessionStorage.clear()}}> .</button> </td>
      <td ><button className={styles.button} onClick={()=>{setNum2(rem);   }}> =</button> </td>
      <td ><button className={styles.button} onClick={()=>{setOperator("+"); setOpEntered(!opEntered);}}> + </button> </td>

      </tr>

      </tbody>
      </table> 


      </main>

     
    </div>
  )
}
