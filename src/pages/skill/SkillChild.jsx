import { TbAutomation } from "react-icons/tb";
import { SiNodered } from "react-icons/si";
import { SiSmartthings } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiGoogledataflow } from "react-icons/si";
import { SiPm2 } from "react-icons/si";
import { FaWarehouse } from "react-icons/fa6";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { GiRelationshipBounds } from "react-icons/gi";
import { FaNetworkWired } from "react-icons/fa6";
import { SiSitepoint } from "react-icons/si";
import { LiaIndustrySolid } from "react-icons/lia";
import { MdHighQuality } from "react-icons/md";

const icons = {
    TbAutomation : TbAutomation ,
    SiNodered  : SiNodered  ,
    SiSmartthings  : SiSmartthings  ,
    SiGoogledataflow   : SiGoogledataflow  ,
    SiPm2   : SiPm2   ,
    SiMongodb  : SiMongodb  ,
    FaWarehouse   : FaWarehouse   ,
    MdEnergySavingsLeaf  : MdEnergySavingsLeaf   ,
    GiRelationshipBounds   : GiRelationshipBounds   ,
    FaNetworkWired   : FaNetworkWired   ,
    SiSitepoint : SiSitepoint ,
    LiaIndustrySolid : LiaIndustrySolid ,
    MdHighQuality : MdHighQuality ,
    
};
const SkillChild = (props) => {
    const IconComponent = icons[props.data.icon];
    
  return (
    <>
    <div className="py-4 px-6 sm:py-8 sm:px-10 bg-slate-900/40 border border-gray-600 hover:border-amber-600 rounded-xl" data-aos="fade-in" data-aos-delay="200">
        <div className="text-6xl flex items-center justify-center">{IconComponent && <IconComponent />}</div>
        <div className="text-center pt-1.5">{props.data.skill}</div>
    </div>
    </>
  )
}

export default SkillChild