import React from 'react';
import './Rules.scss'


  
  export const Rules =() =>{
    console.log( window.innerWidth)
    const requirements: any[] = [
      "So mangla vit eisini brævatkvøvurnar",
      "Orsaka! Vit hava onkrar tekniskar trupulleikar",
      "Einki er avgjørt fyrr allar stemmurnar eru taldar upp",
      "Sigrun Brend prikar ein bunka av atkvøðum við penninum ",
      'Beinir Johannesen sigur "sjolvandø"',
      "John Johannesen brýtur Jóannes Hansen av ",
      'Jóannes Hansen: "unga stjørnuskotið í Klaksvík"',
      "Bjarni Kárason Petersen verður kallaður Kári Bjarnason Petersen",
      "Seta føtur undir egið borð",
      "Ruth Vang er í einum litríkum jakka",
      "Fólkafloksflokkurin verður størstur flokkur í Havn",
      "Javnaðarflokkurin verður størstur flokkur",
      'Aksel nevnir "umsorganarøkið" ella "vælferðararbeiðarar"',
      "Jenis tosar um kristindóm og politikk",
      "Nú leggur tú orð í munnin á mær",
      "Tað er deyðakvirt, einki hendir á skerminum og tíðindafólkið hyggur í kameraði"
          ]
    return (
      <div className='RulesContainer'>
        {requirements.map((item:any,index:number) => 
          <div><h3>{index}:&nbsp;&nbsp;{item}</h3></div>
        )}
      </div>
    );
  }
  