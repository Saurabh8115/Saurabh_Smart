import skilldata from '../../api/skillData.json';
import SkillChild from './SkillChild'


 
const Skill = () => {
  return (
    <>
     <section id="skill" className="w-[90%] mx-auto px-6 py-12">
        <h3  className="text-4xl  font-bold py-2 mb-6  bg-linear-to-r from-[#163e9a] via-[#3a6fe0] to-[#5fa3ff] 
bg-clip-text text-transparent inline-block">My Skills</h3>
        {/* <div className='h-1 w-[110px] bg-amber-300' ></div> */}
        <div className='flex items-center justify-center gap-12 w-full h-auto  flex-wrap py-12'>
          {skilldata.map((data)=>(
            <SkillChild key={data.id} data={data}/>
          ))}
        </div>
        
      </section>
    </>
  )
}

export default Skill