# JSON.parse()

string 객체를 json 객체로 변환시켜준다.

# JSON.stringify()

json 객체를 String객체로 변환시켜 준다.

# JSON 객체

자바스크립트 객체 문법으로 구조화된 데이터를 표현하기 위한 문자 기반의 표준 포맷이다. 웹 어플리케이션에서 데이터를 전송할 때 일반적으로 사용한다. json은 문자열 형태로 존재하는데 데이터에 억세스하기 위해서는 네이티브 객체로 변환될 필요하 있다. 이 변환을 **파싱(Parsing)**이라 한다. 네트워크를 통해 전달할 수 있게 객체를 다시 문자열로 변환하는 과정은 **문자열화(Stringification)**이라 한다.

# JSON 구조

JSON은 Javascript 객체 리터럴 문법을 따르는 문자열이다. 자바스크립트의 기본 데이터 타입인 문자열, 숫자, 배열, 불리언 그리고 다른 객체를 포함할 수 있다.

# Tokenizer

어떤 구문에서 의미있는 최소의 요소들을 토큰으로 쪼개는 역할을 한다.

# Lexer

토큰의 의미를 분석한다. 토큰 단위로 키워드나 속성을 정의한 후 parser에게 넘겨준다.

# Parser

토큰화된 데이터를 가지고 그것을 구조적으로 나타낼 수 있게 해준다. 또한 데이터를 구조적으로 바꾸는 과정에서 데이터가 올바른지 검증을 수행한다.