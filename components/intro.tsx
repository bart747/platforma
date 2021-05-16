import styles from './intro.module.scss'

function Intro() {
  return (
    <div className={ styles.intro }>
      <h3>Heuristics</h3>
      <p>
        Low input, high output – require minimal activity from users,
        but give them high quality feedback. Who works for who?
      </p>
      <p>
        Create system of components.
        It's better to build from blocks and modules than from clay.
      </p>
      <p>
        Make peculiar components from standardized sub-components to achieve 
        familiarity.
      </p>
      <p>
        Software speed matters. Use light assets, efficient code.
      </p>
      <p>
        Correctness matters even more. Write clear code.
        Make it hard to misunderstand.
      </p> 
    </div>
  )
}

export default Intro 

