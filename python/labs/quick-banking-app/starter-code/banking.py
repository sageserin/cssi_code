#!/usr/bin/python
#
# Copyright 2018 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Replace "pass" with your code

class BankAccount(object):
    def __init__(self, label, balance):
        self.label = label
        self.balance = balance

    def __str__(self):
        info = 'label: {l}, balance: {b}'.format(l=self.label, b=self.balance)
        return info

    def withdraw(self, val):
        bal = self.balance
        if val <= bal and val > 0:
            self.balance -= val
            statement = 'your new balance is {b}'.format(b=self.balance)
        elif val < 0:
            statement = 'you can\'t withdraw a negative amount'
        else:
            statement = 'not enough money to withdraw that amount'
        return statement

    def deposit(self, val):
        if val > 0:
            self.balance += val
            statement = 'your new balance is {b}'.format(b=self.balance)
        else:
            statement = 'you can\'t deposit a negative amount'
        return statement

    def rename(self, name):
        if name == "":
            statement = 'the name of your account cannot be blank'
        else:
            self.label = name
            statement = 'the new name of your account is {n}'.format(n=name)
        return statement

    def transfer(self, dest_acc, amount):
        if amount < self.balance and amount > 0:
            dest_acc.balance += amount
            self.balance -= amount
            statement = 'successful'
        else:
            statement = 'invalid'
        return statement
