        <!-- <Route path='/' element={<PaginaPadrao />}>   {/*  Rota Pai */}
          <Route index element={<Inicio />} />    {/*  Rotas filhas */}
          <Route path='sobremim' element={<SobreMim/>}/>  {/*  Rotas filhas */}
        </Route>
      

            Para deixarmos mais clean o código tiramos a / do route note que só tem / no elemento pai, nos filhos eu atribui sem /  isso significa que todos que n forem paginas index ele sera aplicado a /, ja os outros serão aplicados outras paginas. 

          Na rota "/" a estrutura a ser renderizada é:
          <PaginaPadra>
            <Inico />
          </PaginaPadrao>

            Na rota "/sobremim" a estrutura a ser renderizada é:
          <PaginaPadra>
            <SobreMim />
          </PaginaPadrao>
       -->
