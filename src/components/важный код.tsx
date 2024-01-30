<div>
<p>TEXT</p>
</div>

<div className='show'>
<button onClick={()=> setLoaderVisible(!loaderVisible)}>{loaderVisible? 'Ожидайте...' : 'Я оплатил'}</button>
<button>Отклонить заявку</button>
</div>
<div className="wrap">
  <Transition
    in={loaderVisible}
    timeout={500}
    mountOnEnter
    unmountOnExit
  >
    {state => <div className={`circle ${state}`}></div>}
    {/* {loaderVisible? "Обработка.." : "  Успешно!"} */}
  </Transition>
</div>




<div>
<p>TEXT</p>
<form onSubmit={handleSubmit(submit, error)}>
<input 
type="text"
id="name"
 {...register('name',{required: true, minLength: {
  value: 3,
  message: 'Некоректная длина имени. Имя должно содержать больше трёх букв. '
}, validate: value => isName(value) || "Имя должно содержать только буквы!" })} 
aria-invalid= {errors.name ? true:false }/> {errors.name && <p>{errors.name.message}</p>}
<input 
type='phone'
id='phone'
defaultValue={'9'}
 {...register('phone' ,{required: 'Номер телефона обьязателен',
 validate: value => (isNumeric(value.toString()) 
 && value.toString().startsWith('9') 
 && value.toString().length === 10) || 'Неверный номер телефона. Количество цифр в номере = 10. Напишите свой номер телефон начиная с цифры 9  (без +7).  '})}
 aria-invalid={errors.phone ? true:false }/> {errors.phone && <p>{errors.phone.message}</p>}
<button>Submit</button>
<button type='button' onClick = { () => {reset({ phone: 9, name: ''}); clearErrors()}}>Clear</button>
</form>
</div>







<div>
<p>Aria invalid добавляет тру или фалс чтоб распознать ошибку и меняется на тру если есть ошибка</p>
</div>
<div>
<p>Валидэйт запускает функцию которая валидирует буквы цифры</p>
</div>
<div>
<p>Кнопка очистить ошибки меняет значение aria invalid на значение false </p>
</div>
<div>
<p>register, handleSubmit, clearErrors, + setValue для добавле ''</p>
</div>


















}/* BLOCK WITH BUTTON AND CIRCLE LOADING  */
.show {
    display: flex;
    align-items: center;
    justify-content: center; 
    width: 100vw;
    height: 25vh;
    
}
.show > button {
    padding: 20px;
    margin: 10px;
}
.wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25vh;
}

.circle {
    opacity: 1;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px dashed black;
}
/* REACT TRANSITION GROUP */
.circle.entering {
    opacity: 1;
    animation: show-loader .55s forwards;
}
.circle.entered {
    animation: rotate-loader 5s infinite;
}
.circle.exiting {
    background-position: center;
    background-size:contain;
    background-image:url('./img/galochka.png');
    border: 2px dashed black;
    animation: show-loader .55s reverse;
}
.circle.exited {
    opacity: 0;
}







/* ANIMATION  */
@keyframes show-loader {
    0%{
        opacity: 0;
        transform: translateY(-300px);
    }
    50%{
        opacity: 1;
    }
    100%{
        transform: translateY(0px);
    }
}

@keyframes rotate-loader {
    0%{
        transform: rotate(0deg);
    }
    
    100%{
        transform: rotate(360deg);
    }
}

}












import { SubmitErrorHandler, SubmitHandler, useForm} from 'react-hook-form';
import { Transition } from 'react-transition-group';

interface MyForm {
  name: string;
  phone: number;
}
function HomePage() {
  const {register, handleSubmit, clearErrors, reset,
      formState: {errors} } = useForm<MyForm>({
    defaultValues: {}
  })
}
const submit: SubmitHandler<MyForm> = data => {
  console.log(data)
}

const error: SubmitErrorHandler<MyForm> = data => {
  console.log(data)
}

const isName = (value: string) => /^[a-zA-Zа-яА-Я]+$/.test(value);

const isNumeric = (value: string) => /^\d+$/.test(value);

const [loaderVisible, setLoaderVisible] = useState(false)