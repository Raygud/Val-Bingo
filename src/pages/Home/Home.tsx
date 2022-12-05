import './Home.scss'
import {useState, useEffect} from 'react'
import { BsListUl,BsGrid } from 'react-icons/bs';
import { parse } from 'node:path/win32';


export const Home =() => {
    const unSortedNumbers:any[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    for (let i = unSortedNumbers.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let k = unSortedNumbers[i];
        unSortedNumbers[i] = unSortedNumbers[j];
        unSortedNumbers[j] = k;
      }

    const [plateNumbers, setPlateNumbers] = useState<any[]>([...Array(16)])
    const [isClicked, setIsClicked] = useState<any[]>([])
    const [layout, setLayout] = useState<string>("grid")

    const [isSet, setSet] = useState<any>(true)
    const iconStyle = {color:'black', fontSize:'8vw', margin:'1vw'}

    const onClick = (Clicked:any) =>{
        console.log(isClicked)
        if(!isClicked.includes(Clicked)){
        setIsClicked(oldArray => [...oldArray, Clicked]);
        }
        else{
            setIsClicked(isClicked.filter(item => item !== Clicked));
        }
    }

    useEffect(() => {
        if(localStorage.getItem('ClickedNumbers')&& isSet){
            setSet(false)
            setIsClicked(JSON.parse(localStorage.getItem('ClickedNumbers') as any))
        }
        if(!isSet){
        localStorage.setItem('ClickedNumbers', JSON.stringify(isClicked));
        }
    }, [isClicked])

    useEffect(() => {
        if(!localStorage.getItem("StoredNumbers")){

            localStorage.setItem('StoredNumbers', JSON.stringify(unSortedNumbers));
            setPlateNumbers(unSortedNumbers)
        }
        else{

            setPlateNumbers(JSON.parse(localStorage.getItem('StoredNumbers') as any))

        }

    }, [])

    const ToggleLayOut = (Layout:string) => {
        console.log(Layout)
        setLayout(Layout)
    }
    
    return (
      <div>
        <div className="IconContainer"> <div className='LayoutButton' onClick={() => ToggleLayOut("grid")}> <BsGrid style={iconStyle} />  </div> <div className='LayoutButton' onClick={() => ToggleLayOut("list")}><BsListUl style={iconStyle} /></div></div>
        <div className= {layout === "grid" ?'EnteriesGrid':'EnteriesList'}>
        {plateNumbers.map((item:any, index:number) => (
        <div key={index} className={isClicked.includes(item) ? "EnteriesItem Clicked":"EnteriesItem"} onClick={() => onClick(item)}>
            <h6>{item}</h6>
        </div>
      ))}
      </div>
      </div>
    );
  }