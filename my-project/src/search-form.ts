import { Start } from '@mui/icons-material';
import { renderBlock } from './lib.js'
 

function inData (start:Date, end: Date) {
  const currentDate: Date= new Date(start);
  const maximumDate = new Date(end);
  const oneDay = 1000 * 60 * 60 * 24
  const inDataTime = maximumDate.getTime() - currentDate.getTime()
  const inDataDays = Math.round(inDataTime/oneDay)
  return inDataDays
}
 
  
  interface SearchFormData{
    arrivalDate: Date, 
    departureDate: Date,
     handler:(arrivalDate, departureDate) => void | null
  }
   
  export function renderSearchFormBlock (arrivalDate: SearchFormData, departureDate: SearchFormData){
  
    if (arrivalDate === departureDate) {
      alert('неправильно выбрана дата')
    } else {
      return inData(arrivalDate, departureDate)
    }




  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" 
            value="${arrivalDate}" 
            min="${Start}" 
            max="${inData}"  
            name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" 
            type="date" 
            value="${departureDate}" 
            min="${Start}" 
            max="${inData}" 
            name="checkout"/>
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
