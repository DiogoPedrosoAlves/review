from flask import Flask, request, jsonify
import oracledb

def get_conection():
    return oracledb.connect(user="RM570024", password="280707", dsn="oracle.fiap.com.br/orcl")


app = Flask(__name__)


@app.route("/app/pegar", methods=['GET'])
def get_algumacoisa():
    with get_conection() as con:
        with con.cursor() as cursor:
            sql = "SELECT * FROM T_RHSTU_PACIENTE"
            cursor.execute(sql)
            
            dado = cursor.fetchall()
            
    return jsonify(list(dado)), 200

@app.route("/app/pegar/<int:id>", methods=['GET'])
def get_paciente_por_id(id):
    try:
        with get_conection() as con:
            with con.cursor() as cursor:

                sql = "SELECT * FROM T_RHSTU_PACIENTE WHERE ID_PACIENTE = :id_busca"
                cursor.execute(sql, id_busca=id)

                dado = cursor.fetchone()

                if dado is None:
                    return jsonify({"erro": "Paciente não encontrado", "id": id}), 404
                
                return jsonify(dado), 200
                
    except oracledb.DatabaseError as e:
        erro, = e.args
        return jsonify({"erro": "Erro ao acessar o banco de dados", "detalhes": erro.message}), 500





@app.route("/app/add", methods=["POST"])
def post_car():

    dado_requisicao = request.json if request.is_json else None
    
    msg = dado_requisicao or {
        "id_paciente": 3,
        "nm_paciente": "Vitor",
        "nr_cpf": 123456780,
        "NM_RG": 987654320,
        "DT_NASCIMENTO": "03/03/2026",
        "FL_SEXO_BIOLOGICO": "M",
        "DS_ESCOLARIDADE": "Ensino Superior",
        "DS_ESTADO_CIVIL": "Solteiro",
        "NM_GRUPO_SANGUINEO": "O-",
        "NR_ALTURA": 1.80,
        "NR_PESO": 68
    }

    try:
        with get_conection() as con:
            with con.cursor() as cursor:
                sql = """
                INSERT INTO T_RHSTU_PACIENTE (
                    id_paciente, nm_paciente, nr_cpf, NM_RG, 
                    DT_NASCIMENTO, FL_SEXO_BIOLOGICO, DS_ESCOLARIDADE, 
                    DS_ESTADO_CIVIL, NM_GRUPO_SANGUINEO, NR_ALTURA, NR_PESO
                ) VALUES (
                    :id_paciente, :nm_paciente, :nr_cpf, :NM_RG, 
                    TO_DATE(:DT_NASCIMENTO, 'DD/MM/YYYY'), :FL_SEXO_BIOLOGICO, :DS_ESCOLARIDADE, 
                    :DS_ESTADO_CIVIL, :NM_GRUPO_SANGUINEO, :NR_ALTURA, :NR_PESO
                )
                """

                cursor.execute(sql, msg)

                con.commit()

                return jsonify(msg), 201

    except oracledb.DatabaseError as e:
        erro, = e.args
        info = {
            'erro': "Houve um erro de implementação do paciente no banco", 
            'detalhes': erro.message,
            'value': 400
        }
        return jsonify(info), 400

if __name__ == "__main__":
    app.run(debug=True)