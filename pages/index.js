import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

    const [num1,setNum1] = useState()
    const [num2,setNum2] = useState()
    const [operator,setOperator] = useState("")
    const [result,setResult]=useState()

  return (
    <div className={styles.container}>
      <Head>
        <title>Calculator</title>
        <meta name="description" content="Calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <form >
      <input  type="number" />
      </form>
      <table className={styles.table}>
      <tbody>
      <tr>
      <td  ><button className={styles.button} onClick={()=>{sessionStorage.clear()}}> Back </button> </td>
      <td ><button className={styles.button} onClick={()=>{sessionStorage.clear()}}> C</button> </td>
      <td ><button className={styles.button} onClick={()=>{sessionStorage.clear()}}> %</button> </td>
      <td ><button className={styles.button} onClick={()=>{sessionStorage.clear()}}> AC </button> </td>

      </tr>
      <tr>
      <td ><button className={styles.button} onClick={()=>{7}}> 7</button> </td>
      <td ><button className={styles.button} onClick={()=>{sessionStorage.clear()}}> 8</button> </td>
      <td ><button className={styles.button} onClick={()=>{sessionStorage.clear()}}> 9</button> </td>
      <td ><button className={styles.button} onClick={()=>{sessionStorage.clear()}}> / </button> </td>

      </tr>
      <tr>
      <td ><button className={styles.button} onClick={()=>{sessionStorage.clear()}}> 4</button> </td>
      <td ><button className={styles.button} onClick={()=>{sessionStorage.clear()}}> 5</button> </td>
      <td ><button className={styles.button} onClick={()=>{sessionStorage.clear()}}> 6</button> </td>
      <td ><button className={styles.button} onClick={()=>{sessionStorage.clear()}}> x </button> </td>

      </tr>
      <tr>
      <td ><button className={styles.button} onClick={()=>{set}}> 1</button> </td>
      <td ><button className={styles.button} onClick={()=>{sessionStorage.clear()}}> 2</button> </td>
      <td ><button className={styles.button} onClick={()=>{sessionStorage.clear()}}> 3</button> </td>
      <td ><button className={styles.button} onClick={()=>{sessionStorage.clear()}}> - </button> </td>

      </tr>
      <tr>
      <td ><button className={styles.button}  onClick={()=>{sessionStorage.clear()}}> 0 </button> </td>
      <td ><button className={styles.button} onClick={()=>{sessionStorage.clear()}}> .</button> </td>
      <td ><button className={styles.button} onClick={()=>{sessionStorage.clear()}}> =</button> </td>
      <td ><button className={styles.button} onClick={()=>{sessionStorage.clear()}}> + </button> </td>

      </tr>

      </tbody>
      </table> 


      </main>

     
    </div>
  )
}
