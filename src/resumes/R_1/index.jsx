export const R_1 = ({ userData, colors }) => (
   <>
      <section id="capture" className="page">
         <div className="container">
            <div className="leftSide">
               <div className="name">
                  <h1>
                     {userData.firstName} <br />
                     <strong>{userData.lastName}</strong>
                  </h1>

                  <p className="job">{userData.job}</p>
               </div>

               <div className="about">
                  <img src={userData.avatar} alt={`${userData.firstName} ${userData.lastName}`} />

                  <h2>About me</h2>

                  <p>{userData.about}</p>
               </div>

               <div className="contact"></div>
            </div>
            <div className="rightSide"></div>
         </div>
      </section>

      <style jsx>{`
         * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
         }

         h1,
         h2,
         h3,
         h4,
         h5,
         h6 {
            font-family: "Montserrat", sans-serif;
         }

         .page {
            height: 29.7cm;
            width: 21cm;
            background: linear-gradient(to bottom, ${colors.colorBg2}, ${colors.colorBg1});
         }

         .container {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-column-gap: 0.8rem;
            padding: 0.8rem;
            height: 100%;
         }

         h2 {
            font-size: 1.3rem;
            letter-spacing: 1.8px;
            text-transform: uppercase;
            font-weight: 500;
         }

         p {
            font-size: 1.1rem;
            opacity: 0.6;
            font-family: "Open Sans", sans-serif;
         }

         /* LEFTSIDE
_________________________________________________________
_________________________________________________________
_________________________________________________________
_________________________________________________________
*/

         .leftSide {
            grid-column: 1/3;
            color: #fff;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 10px;
         }

         .name {
            padding: 1.4rem;
         }

         h1 {
            font-size: 2.5rem;
            text-transform: uppercase;
            font-weight: 400;
            letter-spacing: 2px;
            margin: 0.9rem 0;
         }

         .job {
            text-transform: capitalize;
         }

         .about {
            margin-top: 100px;
            border: 3px solid white;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.25);
            padding: 0 1rem 1rem 1rem;
         }

         .about img {
            display: block;
            border-radius: 100%;
            border: 3px solid white;
            margin: 0 auto;
            width: 130px;
            height: 130px;
            margin-top: -65px;
         }

         .about h2 {
            margin-top: 1.5rem;
            margin-bottom: 1rem;
         }

         /* RIGHTSIDE
_________________________________________________________
_________________________________________________________
_________________________________________________________
_________________________________________________________
*/

         .rightSide {
            grid-column: 3/6;
            border-radius: 10px;
            background: #eee;
         }
      `}</style>
   </>
)

export default {
   resume: R_1,
   style: {
      colors: {
         colorBg1: "#1d1cc7",
         colorBg2: "#b51a89",
         colorTextPrimary: "#b51a89",
      },
   },
}
