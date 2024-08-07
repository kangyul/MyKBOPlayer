import requests
from bs4 import BeautifulSoup

url = 'https://statiz.sporki.com/'
response = requests.get(url)

html = response.text
soup = BeautifulSoup(html, 'html.parser')
temp = soup.find_all("table")[2]

print(temp)