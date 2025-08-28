import React from 'react'
import TeamImg from './TeamImg'

const TeamPattern1 = ({ team }) => {
  if (team.length == 6) {
    return (
      <div className='flex justify-around items-center p-3'>
        <div className='flex gap-1'>
          <TeamImg img={team[0].img} name={team[0].name} post={team[0].post} width={380} height={380} />
           <TeamImg img={team[1].img} name={team[1].name} post={team[1].post} width={380} height={380} />
        </div>
        <div className='grid grid-cols-2 gap-1'>
          <TeamImg img={team[2].img} name={team[2].name} post={team[2].post} width={200} height={200} />
          <TeamImg img={team[3].img} name={team[3].name} post={team[3].post} width={200} height={200} />
          <TeamImg img={team[4].img} name={team[4].name} post={team[4].post} width={200} height={200} />
          <TeamImg img={team[5].img} name={team[5].name} post={team[5].post} width={200} height={200} />
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="flex justify-between gap-2 flex-wrap">
      {team.map((member, index) => (
        <TeamImg
          key={index}
          img={member.img}
          name={member.name}
          post={member.post}
          size="w-[100px] h-[100px]"
        />
      ))}
    </div>
    )
  }
};

export default TeamPattern1;
