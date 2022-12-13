import { renderBlock } from './lib.js'
import { ISearchFormData } from './interfaces.js';

export function renderSearchFormBlock (arrivalDate: Date | null, departureDate: Date | null){
const currentDate: Date= new Date();
const maximumDate: Date= new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 0)
const selectedTheDate = (d: Date, month: number, day: number) => {
  return `${d.getFullYear()}-${("00" + (d.getMonth() + month + 1)).slice(-2)}-${("00" + (d.getDate() + day)).slice(-2)}`
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
            value="${arrivalDate instanceof Date ? selectedTheDate(arrivalDate, 0, 0) : selectedTheDate(currentDate, 0, 1)}" 
            min="${selectedTheDate(currentDate, 0, 0)}" 
            max="${selectedTheDate(maximumDate, 0, 0)}" 
            name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" 
            type="date" 
            value="${departureDate instanceof Date ? selectedTheDate(departureDate, 0, 0) : selectedTheDate(currentDate, 0, 3)}" 
            min="${selectedTheDate(currentDate, 0, 2)}" 
            max="${selectedTheDate(maximumDate, 0, 0)}" 
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
    document.querySelector('form#searchForm').addEventListener('submit', getSearchFormData)
  }
  
  function getSearchFormData(e: Event): void { 
    e.preventDefault();
  
    const form = new FormData(document.querySelector('form#searchForm'))
  
    const formValues = {
      city: '',
      coordinates: [],
      checkInDate: '',
      checkOutDate: '',
      maxPrice: ''
    }
  
  
    const searchFormData: any = {
      'city': ' ',
      'coordinates': [],
      'check-in-date': Date,
      'check-out-date': Date,
      'max-price': '',
    }
  
  }